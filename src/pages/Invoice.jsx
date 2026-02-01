import { useState, useEffect, useRef } from "react";

export default function Invoice() {
  const invoiceRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
  const [invoiceDate, setInvoiceDate] = useState(today);
  const [dueDate, setDueDate] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [gstEnabled, setGstEnabled] = useState(true);
  const [services, setServices] = useState([{ name: "", description: "", amount: "" }]);

  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    document.body.appendChild(s);
  }, []);

  const subtotal = services.reduce(
    (sum, s) => sum + (parseFloat(s.amount) || 0),
    0
  );

  const gst = gstEnabled ? subtotal * 0.18 : 0;
  const total = subtotal + gst;

  const addService = () =>
    setServices([...services, { name: "", description: "", amount: "" }]);

  const removeService = (i) =>
    setServices(services.filter((_, idx) => idx !== i));

  const updateService = (i, field, value) => {
    const copy = [...services];
    copy[i][field] = value;
    setServices(copy);
  };

  // ✅ FIXED PDF GENERATION
  const downloadPDF = () => {
    if (!window.html2pdf) {
      alert("PDF library is still loading. Please wait a moment and try again.");
      return;
    }

    const element = invoiceRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${invoiceNumber || 'invoice'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    window.html2pdf().set(opt).from(element).save();
  };

  const shareWhatsApp = () => {
    const message = `Dear ${clientName || 'Client'},

Thank you for choosing Suguru Weddings! 🎉

Your invoice ${invoiceNumber} has been generated.
*Total Amount: ₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*
${gstEnabled ? '(Including 18% GST)' : ''}

We'll send you the detailed invoice shortly.

For any queries, feel free to contact us.

Best regards,
Suguru Weddings
📞 +91-8374962192`;

    const encodedMessage = encodeURIComponent(message);
    const phone = clientPhone.replace(/[^0-9]/g, '');
    const whatsappUrl = phone 
      ? `https://wa.me/91${phone}?text=${encodedMessage}`
      : `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const Label = ({ children }) => (
    <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 mt-4 mb-1">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* FORM SECTION */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-fit">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Invoice Generator</h1>
          <p className="text-gray-500 mb-6">Create professional invoices for Suguru Weddings</p>

          <Label>Invoice Number</Label>
          <input 
            className="input" 
            value={invoiceNumber} 
            onChange={e=>setInvoiceNumber(e.target.value)} 
            placeholder="INV-2026-001"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Invoice Date</Label>
              <input 
                type="date" 
                className="input" 
                value={invoiceDate} 
                onChange={e=>setInvoiceDate(e.target.value)} 
              />
            </div>
            <div>
              <Label>Due Date (Optional)</Label>
              <input 
                type="date" 
                className="input" 
                value={dueDate} 
                onChange={e=>setDueDate(e.target.value)} 
              />
            </div>
          </div>

          <Label>Client Name</Label>
          <input 
            className="input" 
            value={clientName} 
            onChange={e=>setClientName(e.target.value)} 
            placeholder="John & Sarah Doe"
          />

          <Label>Client Phone</Label>
          <input 
            className="input" 
            value={clientPhone} 
            onChange={e=>setClientPhone(e.target.value)} 
            placeholder="+91 98765 43210"
          />

          <Label>Client Email (Optional)</Label>
          <input 
            className="input" 
            value={clientEmail} 
            onChange={e=>setClientEmail(e.target.value)} 
            placeholder="client@example.com"
          />

          <Label>Client Address (Optional)</Label>
          <textarea 
            className="input" 
            rows="3"
            value={clientAddress} 
            onChange={e=>setClientAddress(e.target.value)} 
            placeholder="Full address..."
          />

          <div className="flex items-center gap-3 mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <input 
              type="checkbox" 
              id="gstCheck"
              checked={gstEnabled} 
              onChange={()=>setGstEnabled(!gstEnabled)}
              className="w-5 h-5 text-rose-600 rounded"
            />
            <label htmlFor="gstCheck" className="text-sm font-semibold text-gray-700">
              Apply GST @ 18% (SAC: 998383)
            </label>
          </div>

          <Label>Services</Label>

          {services.map((s,i)=>(
            <div key={i} className="bg-gray-50 border-2 border-gray-200 p-4 rounded-lg mt-3 hover:border-rose-300 transition">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-700">Service {i + 1}</span>
                {services.length > 1 && (
                  <button 
                    className="text-red-500 text-sm font-semibold hover:text-red-700" 
                    onClick={()=>removeService(i)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <input 
                className="input mb-2" 
                placeholder="Service name (e.g., Wedding Photography)" 
                value={s.name} 
                onChange={e=>updateService(i,"name",e.target.value)} 
              />
              <textarea
                className="input mb-2"
                rows="2"
                placeholder="Description (optional)"
                value={s.description}
                onChange={e=>updateService(i,"description",e.target.value)}
              />
              <input 
                className="input" 
                type="number" 
                placeholder="Amount (₹)" 
                value={s.amount} 
                onChange={e=>updateService(i,"amount",e.target.value)} 
              />
            </div>
          ))}

          <button 
            onClick={addService} 
            className="w-full mt-4 text-rose-600 font-semibold border-2 border-dashed border-gray-300 rounded-lg py-3 hover:border-rose-600 hover:bg-rose-50 transition"
          >
            + Add Service
          </button>

          <Label>Additional Notes (Optional)</Label>
          <textarea 
            className="input" 
            rows="3"
            value={notes} 
            onChange={e=>setNotes(e.target.value)} 
            placeholder="Payment terms, bank details, special instructions..."
          />

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button 
              onClick={downloadPDF} 
              className="bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <button 
              onClick={shareWhatsApp}
              className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

        {/* INVOICE PREVIEW - PDF TARGET */}
        <div className="lg:sticky lg:top-4 h-fit">
          <div
            ref={invoiceRef}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{ 
              maxWidth: '100%',
              padding: '40px'
            }}
          >
            {/* Header with brand color bar */}
            <div className="border-t-8 border-rose-600 -mt-10 -mx-10 mb-8"></div>

            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-gray-200">
              <div>
                <h2 className="text-3xl font-bold text-rose-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Suguru Weddings
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Professional Photography & Videography<br/>
                  Banjara Hills, Hyderabad, Telangana<br/>
                  Phone: +91-8374962192<br/>
                  Email: info@suguruweddings.com<br/>
                  GSTIN: [Your GSTIN Number]
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {invoiceNumber || "INVOICE"}
                </div>
                <div className="text-sm text-gray-500">
                  {invoiceDate && `Date: ${new Date(invoiceDate).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}`}
                </div>
                {dueDate && (
                  <div className="text-sm text-gray-500">
                    Due: {new Date(dueDate).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Bill To Section */}
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
                Bill To
              </h3>
              <div className="text-lg font-bold text-gray-800 mb-2">
                {clientName || "Client Name"}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                {clientPhone && <div>{clientPhone}</div>}
                {clientEmail && <div>{clientEmail}</div>}
                {clientAddress && <div className="whitespace-pre-line">{clientAddress}</div>}
              </div>
            </div>

            {/* Services Table */}
            <table className="w-full mb-6">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-700">
                    Service Description
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-700 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.filter(s => s.name || s.amount).map((s, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-800">{s.name || "Service"}</div>
                      {s.description && (
                        <div className="text-sm text-gray-500 mt-1">{s.description}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-800">
                      ₹{parseFloat(s.amount || 0).toLocaleString('en-IN', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <div className="flex justify-between text-sm mb-2 text-gray-600">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}</span>
              </div>
              {gstEnabled && (
                <div className="flex justify-between text-sm mb-2 font-semibold text-gray-700">
                  <span>
                    GST @ 18% 
                    <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      SAC: 998383
                    </span>
                  </span>
                  <span>₹{gst.toLocaleString('en-IN', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                <span>Total Amount:</span>
                <span>₹{total.toLocaleString('en-IN', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}</span>
              </div>
            </div>

            {/* Notes */}
            {notes && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h4 className="text-xs font-bold uppercase text-yellow-800 mb-2">
                  Notes
                </h4>
                <p className="text-sm text-yellow-900 whitespace-pre-line">
                  {notes}
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="text-center pt-6 border-t-2 border-gray-200">
              <p className="text-gray-600 mb-3">
                Thank you for choosing Suguru Weddings!
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +91-8374962192
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@suguruweddings.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Styles */}
      <style>{`
        .input {
          width: 100%;
          border: 2px solid #e5e7eb;
          padding: 10px 14px;
          border-radius: 8px;
          margin-top: 4px;
          font-size: 14px;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #e11d48;
          box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.1);
        }
        @media print {
          body {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}

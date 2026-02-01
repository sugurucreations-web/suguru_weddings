import { useState, useRef } from "react";

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

  // ✅ SIMPLE PDF USING PRINT
  const downloadPDF = () => {
    window.print();
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-10 no-print">
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

          {/* PREVIEW FOR SCREEN */}
          <div className="lg:sticky lg:top-4 h-fit bg-white rounded-xl shadow-2xl p-8">
            <div className="border-t-8 border-rose-600 -mt-8 -mx-8 mb-6"></div>
            
            <div className="flex justify-between items-start mb-6 pb-4 border-b-2">
              <div>
                <h2 className="text-3xl font-bold text-rose-600 mb-2">Suguru Weddings</h2>
                <p className="text-sm text-gray-600">
                  Professional Photography & Videography<br/>
                  Banjara Hills, Hyderabad<br/>
                  +91-8374962192
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{invoiceNumber}</div>
                <div className="text-sm text-gray-500">
                  {invoiceDate && new Date(invoiceDate).toLocaleDateString('en-IN')}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <div className="text-xs font-bold text-gray-600 mb-2">BILL TO</div>
              <div className="font-bold text-lg">{clientName || "Client Name"}</div>
              <div className="text-sm text-gray-600">
                {clientPhone && <div>{clientPhone}</div>}
                {clientEmail && <div>{clientEmail}</div>}
              </div>
            </div>

            <table className="w-full mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 text-xs">SERVICE</th>
                  <th className="text-right p-3 text-xs">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {services.filter(s => s.name || s.amount).map((s, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">
                      <div className="font-semibold">{s.name || "Service"}</div>
                      {s.description && <div className="text-sm text-gray-500">{s.description}</div>}
                    </td>
                    <td className="text-right p-3">
                      ₹{parseFloat(s.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bg-gray-50 p-4 rounded">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              {gstEnabled && (
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span>GST @ 18%</span>
                  <span>₹{gst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t-2">
                <span>Total:</span>
                <span>₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            {notes && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4">
                <div className="text-xs font-bold text-yellow-800 mb-1">NOTES</div>
                <div className="text-sm text-yellow-900">{notes}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PRINTABLE VERSION - HIDDEN ON SCREEN */}
      <div className="print-only" ref={invoiceRef}>
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
          {/* Red bar */}
          <div style={{ borderTop: '8px solid #e11d48', marginBottom: '30px' }}></div>

          {/* Header */}
          <table style={{ width: '100%', marginBottom: '30px', borderBottom: '2px solid #e5e7eb', paddingBottom: '20px' }}>
            <tr>
              <td style={{ width: '60%' }}>
                <h1 style={{ fontSize: '32px', color: '#e11d48', margin: '0 0 10px 0', fontFamily: 'Georgia, serif' }}>
                  Suguru Weddings
                </h1>
                <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.8' }}>
                  Professional Photography & Videography<br/>
                  Banjara Hills, Hyderabad, Telangana<br/>
                  Phone: +91-8374962192<br/>
                  Email: info@suguruweddings.com<br/>
                  GSTIN: [Your GSTIN Number]
                </div>
              </td>
              <td style={{ width: '40%', textAlign: 'right', verticalAlign: 'top' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
                  {invoiceNumber || "INVOICE"}
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
                  Date: {invoiceDate && new Date(invoiceDate).toLocaleDateString('en-IN', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  })}
                </div>
                {dueDate && (
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    Due: {new Date(dueDate).toLocaleDateString('en-IN', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </div>
                )}
              </td>
            </tr>
          </table>

          {/* Bill To */}
          <div style={{ backgroundColor: '#f9fafb', padding: '20px', marginBottom: '25px' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b7280', marginBottom: '10px' }}>
              BILL TO
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
              {clientName || "Client Name"}
            </div>
            <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>
              {clientPhone && <div>{clientPhone}</div>}
              {clientEmail && <div>{clientEmail}</div>}
              {clientAddress && <div style={{ whiteSpace: 'pre-line' }}>{clientAddress}</div>}
            </div>
          </div>

          {/* Services */}
          <table style={{ width: '100%', marginBottom: '25px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>
                  SERVICE DESCRIPTION
                </th>
                <th style={{ padding: '12px', textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              {services.filter(s => s.name || s.amount).map((s, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>
                    <div style={{ fontWeight: '600', marginBottom: '3px' }}>{s.name || "Service"}</div>
                    {s.description && <div style={{ fontSize: '12px', color: '#6b7280' }}>{s.description}</div>}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    ₹{parseFloat(s.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div style={{ backgroundColor: '#f9fafb', padding: '20px', marginBottom: '25px' }}>
            <table style={{ width: '100%' }}>
              <tr>
                <td style={{ fontSize: '14px', padding: '5px 0' }}>Subtotal:</td>
                <td style={{ fontSize: '14px', textAlign: 'right', padding: '5px 0' }}>
                  ₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </td>
              </tr>
              {gstEnabled && (
                <tr>
                  <td style={{ fontSize: '14px', fontWeight: '600', padding: '5px 0' }}>
                    GST @ 18% <span style={{ fontSize: '11px', backgroundColor: '#dbeafe', color: '#1e40af', padding: '2px 8px', borderRadius: '12px', marginLeft: '8px' }}>SAC: 998383</span>
                  </td>
                  <td style={{ fontSize: '14px', fontWeight: '600', textAlign: 'right', padding: '5px 0' }}>
                    ₹{gst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              )}
              <tr style={{ borderTop: '2px solid #d1d5db' }}>
                <td style={{ fontSize: '20px', fontWeight: 'bold', paddingTop: '12px' }}>Total Amount:</td>
                <td style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'right', paddingTop: '12px' }}>
                  ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </table>
          </div>

          {/* Notes */}
          {notes && (
            <div style={{ backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '15px', marginBottom: '25px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#92400e', marginBottom: '8px' }}>
                NOTES
              </div>
              <div style={{ fontSize: '13px', color: '#78350f', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                {notes}
              </div>
            </div>
          )}

          {/* Footer */}
          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '2px solid #e5e7eb' }}>
            <div style={{ fontSize: '14px', marginBottom: '12px' }}>
              Thank you for choosing Suguru Weddings!
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>
              📞 +91-8374962192 | ✉️ info@suguruweddings.com
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
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
        
        /* Hide print version on screen */
        .print-only {
          display: none;
        }
        
        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            margin: 0;
            size: A4;
          }
        }
      `}</style>
    </>
  );
}

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
  const [services, setServices] = useState([{ name: "", amount: "" }]);

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
    setServices([...services, { name: "", amount: "" }]);

  const removeService = (i) =>
    setServices(services.filter((_, idx) => idx !== i));

  const updateService = (i, field, value) => {
    const copy = [...services];
    copy[i][field] = value;
    setServices(copy);
  };

  // ✅ REAL PDF FIX
  const downloadPDF = () => {
    setTimeout(() => {
      window.html2pdf().set({
        margin: 10,
        filename: `${invoiceNumber}.pdf`,
        html2canvas: {
          scale: 2,
          backgroundColor: "#ffffff"
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        }
      }).from(invoiceRef.current).save();
    }, 600);
  };

  const Label = ({ children }) => (
    <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 mt-4">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-rose-50 p-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>

          <Label>Invoice Number</Label>
          <input className="input" value={invoiceNumber} onChange={e=>setInvoiceNumber(e.target.value)} />

          <Label>Invoice Date</Label>
          <input type="date" className="input" value={invoiceDate} onChange={e=>setInvoiceDate(e.target.value)} />

          <Label>Due Date</Label>
          <input type="date" className="input" value={dueDate} onChange={e=>setDueDate(e.target.value)} />

          <Label>Client Name</Label>
          <input className="input" value={clientName} onChange={e=>setClientName(e.target.value)} />

          <Label>Client Phone</Label>
          <input className="input" value={clientPhone} onChange={e=>setClientPhone(e.target.value)} />

          <Label>Client Email (optional)</Label>
          <input className="input" value={clientEmail} onChange={e=>setClientEmail(e.target.value)} />

          <Label>Client Address</Label>
          <textarea className="input" value={clientAddress} onChange={e=>setClientAddress(e.target.value)} />

          <Label>Additional Notes</Label>
          <textarea className="input" value={notes} onChange={e=>setNotes(e.target.value)} />

          <div className="flex gap-2 mt-4 text-sm">
            <input type="checkbox" checked={gstEnabled} onChange={()=>setGstEnabled(!gstEnabled)} />
            Apply GST (18%)
          </div>

          <Label>Services</Label>

          {services.map((s,i)=>(
            <div key={i} className="bg-gray-50 p-4 rounded mt-2">
              <input className="input mb-2" placeholder="Service" value={s.name} onChange={e=>updateService(i,"name",e.target.value)} />
              <input className="input" type="number" placeholder="Amount" value={s.amount} onChange={e=>updateService(i,"amount",e.target.value)} />
              {services.length>1 && <button className="text-red-500 text-sm mt-2" onClick={()=>removeService(i)}>Remove</button>}
            </div>
          ))}

          <button onClick={addService} className="text-rose-600 mt-3 text-sm">+ Add Service</button>

          <button onClick={downloadPDF} className="w-full bg-rose-600 text-white py-3 rounded mt-6">
            Download PDF
          </button>
        </div>

        {/* PREVIEW (PDF TARGET) */}
        <div
          ref={invoiceRef}
          style={{ width: "794px", background: "#fff" }}
          className="bg-white rounded shadow p-10"
        >

          <h2 className="text-2xl font-bold text-rose-600">Suguru Weddings</h2>

          <p>Invoice: {invoiceNumber}</p>
          <p>Invoice Date: {invoiceDate}</p>
          <p>Due Date: {dueDate}</p>

          <div className="mt-4">
            <strong>{clientName}</strong><br/>
            {clientPhone}<br/>
            {clientEmail && <>{clientEmail}<br/></>}
            {clientAddress}
          </div>

          <hr className="my-4"/>

          {services.map((s,i)=>(
            <div key={i} className="flex justify-between text-sm mb-1">
              <span>{s.name}</span>
              <span>₹{parseFloat(s.amount||0).toFixed(2)}</span>
            </div>
          ))}

          <div className="bg-gray-50 p-4 mt-4">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
            {gstEnabled && <div className="flex justify-between"><span>GST 18%</span><span>₹{gst.toFixed(2)}</span></div>}
            <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          </div>

          {notes && <p className="mt-4 text-sm"><strong>Notes:</strong> {notes}</p>}

          <div className="mt-8 text-center text-sm text-gray-500">
            Thank you for choosing Suguru Weddings!<br/>
            +91-8374962192
          </div>

        </div>
      </div>

      {/* quick input style */}
      <style>{`
        .input {
          width:100%;
          border:1px solid #e5e7eb;
          padding:10px;
          border-radius:8px;
          margin-top:6px;
        }
      `}</style>
    </div>
  );
}

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

  const downloadPDF = () => {
    setTimeout(() => {
      window.html2pdf().set({
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4" }
      }).from(invoiceRef.current).save(`${invoiceNumber}.pdf`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">

          <h1 className="text-3xl font-bold">Invoice Generator</h1>

          <label>Invoice Number</label>
          <input className="border p-3 rounded-xl w-full" value={invoiceNumber} onChange={e=>setInvoiceNumber(e.target.value)} />

          <label>Invoice Date</label>
          <input type="date" className="border p-3 rounded-xl w-full" value={invoiceDate} onChange={e=>setInvoiceDate(e.target.value)} />

          <label>Due Date</label>
          <input type="date" className="border p-3 rounded-xl w-full" value={dueDate} onChange={e=>setDueDate(e.target.value)} />

          <label>Client Name</label>
          <input className="border p-3 rounded-xl w-full" value={clientName} onChange={e=>setClientName(e.target.value)} />

          <label>Client Phone</label>
          <input className="border p-3 rounded-xl w-full" value={clientPhone} onChange={e=>setClientPhone(e.target.value)} />

          <label>Client Email (optional)</label>
          <input className="border p-3 rounded-xl w-full" value={clientEmail} onChange={e=>setClientEmail(e.target.value)} />

          <label>Client Address</label>
          <textarea className="border p-3 rounded-xl w-full" value={clientAddress} onChange={e=>setClientAddress(e.target.value)} />

          <label>Additional Notes</label>
          <textarea className="border p-3 rounded-xl w-full" value={notes} onChange={e=>setNotes(e.target.value)} />

          <div className="flex items-center gap-2">
            <input type="checkbox" checked={gstEnabled} onChange={()=>setGstEnabled(!gstEnabled)} />
            <span>Apply GST (18%)</span>
          </div>

          <h3 className="font-bold pt-4">Services</h3>

          {services.map((s,i)=>(
            <div key={i} className="bg-slate-50 p-4 rounded-xl">
              <input className="border p-2 w-full mb-2 rounded" placeholder="Service" value={s.name} onChange={e=>updateService(i,"name",e.target.value)} />
              <input type="number" className="border p-2 w-full rounded" placeholder="Amount" value={s.amount} onChange={e=>updateService(i,"amount",e.target.value)} />
              {services.length>1 && <button onClick={()=>removeService(i)} className="text-red-500 mt-2">Remove</button>}
            </div>
          ))}

          <button onClick={addService} className="text-rose-600 font-semibold">+ Add Service</button>

          <button onClick={downloadPDF} className="w-full bg-rose-600 text-white py-3 rounded-xl">Download PDF</button>

        </div>

        {/* PREVIEW */}
        <div ref={invoiceRef} className="bg-white rounded-2xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-rose-600">Suguru Weddings</h2>

          <p>Invoice: {invoiceNumber}</p>
          <p>Invoice Date: {invoiceDate}</p>
          <p>Due Date: {dueDate}</p>

          <p className="mt-2">Client: {clientName}</p>
          <p>{clientPhone}</p>
          {clientEmail && <p>{clientEmail}</p>}
          <p>{clientAddress}</p>

          <hr className="my-4"/>

          {services.map((s,i)=>(
            <div key={i} className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span>₹{parseFloat(s.amount||0).toFixed(2)}</span>
            </div>
          ))}

          <div className="bg-slate-50 p-4 rounded-xl mt-6">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
            {gstEnabled && <div className="flex justify-between"><span>GST 18%</span><span>₹{gst.toFixed(2)}</span></div>}
            <div className="flex justify-between font-bold border-t pt-2 mt-2"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          </div>

          {notes && <p className="mt-4 text-sm"><strong>Notes:</strong> {notes}</p>}

          <div className="mt-8 text-center text-sm text-gray-500">
            Thank you for choosing Suguru Weddings!<br/>
            +91-8374962192
          </div>

        </div>
      </div>
    </div>
  );
}

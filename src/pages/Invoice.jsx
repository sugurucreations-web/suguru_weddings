import { useState, useEffect, useRef } from "react";

export default function Invoice() {
  const invoiceRef = useRef(null);

  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [logo, setLogo] = useState(null);

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

  const gst = subtotal * 0.18;
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

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const downloadPDF = () => {
    window.html2pdf().from(invoiceRef.current).save(`${invoiceNumber}.pdf`);
  };

  const shareWhatsApp = () => {
    const msg = `Invoice ${invoiceNumber}
Client: ${clientName}
Total: ₹${total.toFixed(2)}
Due: ${dueDate || "N/A"}

Suguru Weddings`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5">

          <h1 className="text-3xl font-bold">Invoice Generator</h1>

          <input className="border p-3 rounded-xl w-full"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="Invoice Number"
          />

          <input className="border p-3 rounded-xl w-full"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Client Name"
          />

          <textarea className="border p-3 rounded-xl w-full"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            placeholder="Client Address"
          />

          <input type="date"
            className="border p-3 rounded-xl w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <input type="file" onChange={handleLogo} />

          {services.map((s, i) => (
            <div key={i} className="bg-slate-50 p-4 rounded-xl">

              <input className="border p-2 w-full mb-2 rounded"
                placeholder="Service"
                value={s.name}
                onChange={(e) => updateService(i, "name", e.target.value)}
              />

              <input type="number"
                className="border p-2 w-full rounded"
                placeholder="Amount"
                value={s.amount}
                onChange={(e) => updateService(i, "amount", e.target.value)}
              />

              {services.length > 1 && (
                <button onClick={() => removeService(i)} className="text-red-500 mt-2">
                  Remove
                </button>
              )}
            </div>
          ))}

          <button onClick={addService} className="text-rose-600 font-semibold">
            + Add Service
          </button>

          <button onClick={downloadPDF}
            className="w-full bg-rose-600 text-white py-3 rounded-xl">
            Download PDF
          </button>

          <button onClick={shareWhatsApp}
            className="w-full bg-green-500 text-white py-3 rounded-xl">
            Share WhatsApp
          </button>

        </div>

        {/* PREVIEW */}
        <div ref={invoiceRef} className="bg-white rounded-2xl shadow-xl p-10 sticky top-10">

          {logo && <img src={logo} className="h-20 mb-4" />}

          <h2 className="text-3xl font-bold text-rose-600">Suguru Weddings</h2>

          <p className="mt-2">Invoice: {invoiceNumber}</p>
          <p>Client: {clientName}</p>
          <p>{clientAddress}</p>
          <p>Due Date: {dueDate}</p>

          <div className="border-t my-4" />

          {services.map((s, i) => (
            <div key={i} className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span>₹{parseFloat(s.amount || 0).toFixed(2)}</span>
            </div>
          ))}

          <div className="bg-slate-50 p-4 rounded-xl mt-6">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>GST 18%</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

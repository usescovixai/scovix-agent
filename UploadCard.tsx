"use client";

export default function UploadCard() {
  return (
    <section className="max-w-3xl mx-auto border rounded-xl p-8">
      <h2 className="text-2xl font-bold">
        Upload Dataset
      </h2>

      <input
        type="file"
        multiple
        accept="image/*,video/*"
        className="mt-6"
      />

      <button className="mt-6 px-6 py-3 bg-emerald-600 rounded-lg">
        Upload
      </button>
    </section>
  );
}

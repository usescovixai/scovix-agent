export default function DatasetGrid() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">
        AI Datasets
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border rounded-xl p-6">
          Street Photography
        </div>

        <div className="border rounded-xl p-6">
          Food Dataset
        </div>

        <div className="border rounded-xl p-6">
          Driving Videos
        </div>
      </div>
    </section>
  );
}

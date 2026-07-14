export default function PhotoUpload() {
  return (
    <div>
      <label className="block mb-2">Fotos</label>

      <input
        type="file"
        multiple
        className="
          w-full
          border
          rounded-lg
          p-3
        "
      />
    </div>
  );
}

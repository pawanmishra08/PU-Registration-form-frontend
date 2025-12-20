import React, { useState } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AcademicInformation: React.FC = () => {
  const [hasDiploma, setHasDiploma] = useState("No");
  const [hasQuota, setHasQuota] = useState("No");

  const [formData, setFormData] = useState({
    seeMarks: "",
    seeBoard: "",
    seeYear: "",
    plus2Marks: "",
    plus2Board: "",
    plus2Year: "",
    diplomaMarks: "",
    diplomaBoard: "",
    diplomaYear: "",
    quotaType: "",
  });

  const [files, setFiles] = useState<Record<string, File | null>>({
    seeMarksheet: null,
    seeCharacter: null,
    plus2Marksheet: null,
    plus2Character: null,
    diplomaMarksheet: null,
    diplomaCharacter: null,
    Quota: null,

    //  ADDED (dynamic quota uploads)
    madheshiDoc: null,
    dalitDoc: null,
    janjatiDoc: null,
    apangDoc: null,
  });

  const navigate = useNavigate();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selected } = e.target;
    if (!selected || !selected[0]) return;

    const file = selected[0];

    const allowed = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowed.includes(file.type)) {
      alert("Only JPG, PNG & PDF allowed");
      return;
    }

    setFiles({ ...files, [name]: file });
  };

  //  ADDED (Quota name mapper)
  const getQuotaLabel = (type: string) => {
    switch (type) {
      case "madheshi":
        return "मधेशी";
      case "dalit":
        return "दलित";
      case "janjati":
        return "जनजाति";
      case "apang":
        return "अपांग";
        case "others":
          return "अन्य"
      default:
        return "";
    }
  };

  const UploadCard = ({
    label,
    name,
    required,
  }: {
    label: string;
    name: string;
    required?: boolean;
  }) => (
    <div className="p-3 border rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>

      <label
        htmlFor={name}
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
      >
        <Upload className="w-6 h-6 text-gray-500" />

        <span className="text-sm text-gray-600 mt-2">
          {files[name] ? (
            <span className="text-green-600 font-medium">
              {files[name]!.name}
            </span>
          ) : (
            "Click to upload"
          )}
        </span>

        <input
          id={name}
          name={name}
          type="file"
          required={required}
          onChange={handleFile}
          className="hidden"
        />
      </label>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Academic information saved!");
  };


  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Academic Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ---------------- SEE ---------------- */}
        <section>
          <h3 className="text-xl font-semibold mb-2">SEE / Grade 10</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              name="seeMarks"
              placeholder="Marks/GPA"
              required
              value={formData.seeMarks}
              onChange={handleInput}
              className="input-field"
            />
            <input
              type="text"
              name="seeBoard"
              placeholder="Board"
              required
              value={formData.seeBoard}
              onChange={handleInput}
              className="input-field"
            />
            <input
              type="text"
              name="seeYear"
              placeholder="Passed Year"
              required
              value={formData.seeYear}
              onChange={handleInput}
              className="input-field"
            />
          </div>

          {/* Upload Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UploadCard label="SEE Marksheet" name="seeMarksheet" required />
            <UploadCard
              label="SEE Character Certificate"
              name="seeCharacter"
              required
            />
          </div>
        </section>

        {/* +2 */}
        <section>
          <h3 className="text-xl font-semibold mb-2">10+2 / Intermediate</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              name="plus2Marks"
              placeholder="Marks/GPA"
              required
              value={formData.plus2Marks}
              onChange={handleInput}
              className="input-field"
            />
            <input
              type="text"
              name="plus2Board"
              placeholder="Board"
              required
              value={formData.plus2Board}
              onChange={handleInput}
              className="input-field"
            />
            <input
              type="text"
              name="plus2Year"
              placeholder="Passed Year"
              required
              value={formData.plus2Year}
              onChange={handleInput}
              className="input-field"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UploadCard label="+2 Marksheet" name="plus2Marksheet" required />
            <UploadCard
              label="+2 Character Certificate"
              name="plus2Character"
              required
            />
          </div>
        </section>

        {/* ---------------- DIPLOMA OPTIONAL ---------------- */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Diploma (Optional)</h3>

          <select
            value={hasDiploma}
            onChange={(e) => setHasDiploma(e.target.value)}
            className="input-field w-40"
          >
            <option>No</option>
            <option>Yes</option>
          </select>

          {hasDiploma === "Yes" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  name="diplomaMarks"
                  placeholder="Marks/GPA"
                  required
                  value={formData.diplomaMarks}
                  onChange={handleInput}
                  className="input-field"
                />
                <input
                  type="text"
                  name="diplomaBoard"
                  placeholder="Board/Institute"
                  required
                  value={formData.diplomaBoard}
                  onChange={handleInput}
                  className="input-field"
                />
                <input
                  type="text"
                  name="diplomaYear"
                  placeholder="Passed Year"
                  required
                  value={formData.diplomaYear}
                  onChange={handleInput}
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <UploadCard
                  label="Diploma Marksheet"
                  name="diplomaMarksheet"
                  required
                />
                <UploadCard
                  label="Diploma Character Certificate"
                  name="diplomaCharacter"
                  required
                />
              </div>
            </>
          )}
        </section>

        {/* ---------------- QUOTA CERTIFICATE OPTIONAL ---------------- */}
        <section>
          <h3 className="text-xl font-semibold mb-2">
            For Reservation (Quota certificate if applicable)
          </h3>

          <select
            value={hasQuota}
            onChange={(e) => setHasQuota(e.target.value)}
            className="input-field w-40"
          >
            <option>No</option>
            <option>Yes</option>
          </select>

          {hasQuota === "Yes" && (
            <>
              {/*  ADDED → Quota Selection Dropdown */}
              <div className="mt-4">
                <label className="block font-medium mb-1">
                  Select Quota Type (कोटा छान्नुहोस्)
                </label>

                <select
                  name="quotaType"
                  value={formData.quotaType}
                  onChange={handleInput}
                  required
                  className="input-field"
                >
                  <option value="">-- छान्नुहोस् --</option>
                  <option value="madheshi">मधेशी</option>
                  <option value="dalit">दलित</option>
                  <option value="janjati">जनजाति</option>
                  <option value="apang">अपांग</option>
                </select>
              </div>

              {/*  ADDED → Dynamic Upload Section */}
              {formData.quotaType && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <UploadCard
                    label={`${getQuotaLabel(
                      formData.quotaType
                    )} प्रमाणपत्र (Certificate)`}
                    name={`${formData.quotaType}Doc`}
                    required
                  />
                </div>
              )}
            </>
          )}
        </section>

        {/* Submit */}
        <div className="text-center">
          <button
          onClick={() => navigate("/StudentsRegistration/Voucher")}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicInformation;

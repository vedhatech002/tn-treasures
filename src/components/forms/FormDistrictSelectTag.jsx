import PropTypes from "prop-types";
import tnData from "../../distictsData.json";

const FormDistrictSelectTag = ({ name, register, error }) => {
  return (
    <div className="w-full space-y-2">
      <label className="font-montserrat font-semibold ">
        category of tourist destination
      </label>
      <select
        name={name}
        id="category"
        className="px-4 py-2 rounded bg-gray-100 w-full outline-none"
        {...register}
      >
        <option value="">Select District</option>
        {tnData.districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormDistrictSelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default FormDistrictSelectTag;

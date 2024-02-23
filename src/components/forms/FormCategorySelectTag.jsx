import PropTypes from "prop-types";

const FormCategorySelectTag = ({ name, register, error }) => {
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
        <option value="">Select category</option>
        <option value="Hills">Hills </option>
        <option value="Waterfalls">Waterfalls</option>
        <option value="Palaces">Palaces</option>
        <option value="Temples">Temples</option>
        <option value="Beaches">Beaches</option>
        <option value="Beaches">forest </option>
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormCategorySelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default FormCategorySelectTag;

import PropTypes from "prop-types";

const FormInput = ({
  name,
  type = "text",
  placeholder,
  register,
  error,
  label,
}) => {
  return (
    <div className="w-full relative space-y-2">
      <label className="font-montserrat font-semibold ">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-100 outline-none rounded w-full "
        {...register}
      />
      {error && (
        <small className="text-red-500 ml-2  top-10">{error.message}</small>
      )}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  label: PropTypes.string,
};

export default FormInput;

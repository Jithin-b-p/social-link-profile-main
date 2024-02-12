/* eslint-disable react/prop-types */
function Button({ title }) {
  return (
    <button className="mb-4 bg-grey min-w-full py-3 text-center text-sm font-semibold rounded-lg transition ease-out delay-100 hover:bg-green focus:bg-green focus:text-offblack hover:text-offblack motion-reduce:transition-none">
      {title}
    </button>
  );
}

export default Button;

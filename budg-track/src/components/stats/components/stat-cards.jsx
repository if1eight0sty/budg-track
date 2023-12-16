import PropTypes from "prop-types";

const StatCard = ({ value, title }) => {
  return (
    <>
      <div className="border bg-white rounded">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            {title}
          </dt>
          <dd className="mt-1 text-[#2e2e2e]/70">
            <span className="mr-2 text-xl">NRs</span>
            <span className="text-3xl font-semibold text-[#2e2e2e]/60">
              {value}
            </span>
          </dd>
        </div>
      </div>
    </>
  );
};

StatCard.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default StatCard;

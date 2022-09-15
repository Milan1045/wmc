exports.getDate = function() {
  let today = new Date();
  let options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric",
  };
  return today.toLocaleDateString("hin-IN", options);
};
exports.getDay = function () {
  let today = new Date();
  let options = {
    weekday:"long"
  };

let day = today.toLocaleDateString("hin-IN",options);
}

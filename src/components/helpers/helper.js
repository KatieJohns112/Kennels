// displayiong current date on the DOM
export const CurrentDate = () => {

const dateObj = new Date(Date.now());
const date = dateObj.toLocaleDateString();

return <p class="date">Todays Date: {date}</p>
}
// displaying current date on the DOM
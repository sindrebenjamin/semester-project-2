import { setError } from './setError.js';
import { dateToISO } from '../../utils/dateToIso.js';
import { oneWeekTo } from '../../utils/formatDate.js';

const edit = new URLSearchParams(window.location.search).get('edit');
const dateInput = document.querySelector('#end-date');

// Sets date to one week from today
!edit && (dateInput.value = oneWeekTo());

dateInput.onfocus = () => dateInput.showPicker();

/**
 *
 * @param {*} def
 * Takes default hint for input as argument
 */
export const inputDate = (def) => {
  const input = dateInput;
  const label = document.querySelector('#end-date-label');
  const hint = document.querySelector('#end-date-hint');

  input.onchange = () => {
    const test = testDate(input.value);
    setError(
      test,
      input,
      hint,
      label,
      'Cannot be past date or more than one year from now',
      def,
    );
  };
};

function testDate(date) {
  const createDate = new Date();
  const now = dateToISO(createDate);
  const selectedDate = dateToISO(date);
  const inAYear = new Date(createDate);
  const year = dateToISO(inAYear.setFullYear(createDate.getFullYear() + 1));

  if (selectedDate < now || selectedDate > year) {
    return false;
  }
  return true;
}

import { DateTime } from "luxon";

const convertData = (timestamp: number):string | null => {
  return DateTime.fromSeconds(timestamp).toFormat('EEEE, dd');
}

export default convertData;
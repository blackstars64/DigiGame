import { format } from "date-fns";
import { fr } from "date-fns/locale";

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const formattedDate = format(date, "dd MMMM yyyy ", {
    locale: fr,
  });
  return formattedDate;
}

export default formatDate;

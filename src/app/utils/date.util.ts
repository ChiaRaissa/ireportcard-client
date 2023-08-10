export const today = () => new Date();
export const todayYear = () => today().getFullYear();

export const dateToISO = (date: Date | string | undefined, time: boolean = false) => {
  if (date == null) {
    return "Not set";
  }
  if (typeof date != "string") {
    date = date.toISOString();
  }
  const isoString = date
  if (time) {
    return isoString;
  } else {
    return isoString.slice(0, 10);
  }
}

class DateTime {
  private date: Date;
  constructor(datetime: string | Date | undefined) {
    this.date = new Date(datetime ?? new Date());
  }

  // Returns a string representation of the time component of the DateTime object
  get timeAsString(): string {
    const hour = this.date.getHours().toString().padStart(2, '0');
    const minute = this.date.getMinutes().toString().padStart(2, '0');
    const second = this.date.getSeconds().toString().padStart(2, '0');

    return `${hour}:${minute}:${second}`;
  }

  // Returns a string representation of the date component of the DateTime object
  get dateAsString(): string {
    const year = this.date.getFullYear().toString().padStart(4, '0');
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
    const day = this.date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}

export const displayTime = (isodate: PossibleDate) => {
  return new DateTime(isodate).timeAsString
}

export type PossibleDateArray = [number, number, number, number, number, number, number]
export type PossibleDate = string | Date | undefined

/* eslint-disable react/prop-types */
import {
  dateToInputValue,
  getMonthCells,
} from "./dateCellPickerUtils.js";
import "./DateCellPicker.css";

const getDatePickerTexts = (locale) => {
  const shortLocale = String(locale || "en").toLowerCase().split("-")[0];
  if (shortLocale === "fr") {
    return {
      previousMonth: "Mois precedent",
      nextMonth: "Mois suivant",
      today: "Aujourd'hui",
      close: "Fermer",
      title: "Choisir une date",
    };
  }
  return {
    previousMonth: "Previous month",
    nextMonth: "Next month",
    today: "Today",
    close: "Close",
    title: "Choose date",
  };
};

export const DateCellPickerPopover = ({
  locale,
  picker,
  onClose,
  onCommit,
  onViewMonthChange,
}) => {
  if (!picker) return null;

  const texts = getDatePickerTexts(locale);
  const selectedValue = picker.value;
  const todayValue = dateToInputValue(new Date());
  const monthDate = new Date(picker.viewYear, picker.viewMonth, 1);
  const monthLabel = new Intl.DateTimeFormat(locale || "en", {
    month: "long",
    year: "numeric",
  }).format(monthDate);
  const weekdayLabels = Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(locale || "en", { weekday: "narrow" }).format(
      new Date(2023, 0, 2 + index),
    ),
  );
  const days = getMonthCells(picker.viewYear, picker.viewMonth);

  return (
    <div
      className="dc-date-picker-popover"
      style={{
        left: `${picker.position.left}px`,
        top: `${picker.position.top}px`,
      }}
      role="dialog"
      aria-label={texts.title}
      onMouseDown={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
    >
      <div className="dc-date-picker-header">
        <button
          type="button"
          className="dc-date-picker-nav"
          aria-label={texts.previousMonth}
          onClick={() => onViewMonthChange(-1)}
        >
          &lt;
        </button>
        <div className="dc-date-picker-month">{monthLabel}</div>
        <button
          type="button"
          className="dc-date-picker-nav"
          aria-label={texts.nextMonth}
          onClick={() => onViewMonthChange(1)}
        >
          &gt;
        </button>
      </div>

      <div className="dc-date-picker-weekdays">
        {weekdayLabels.map((label, index) => (
          <div key={`${label}-${index}`}>{label}</div>
        ))}
      </div>

      <div className="dc-date-picker-grid">
        {days.map((day) => {
          const selected = day.inputValue === selectedValue;
          const today = day.inputValue === todayValue;
          return (
            <button
              type="button"
              key={day.inputValue}
              className={[
                "dc-date-picker-day",
                day.inMonth ? "" : "is-outside",
                selected ? "is-selected" : "",
                today ? "is-today" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onCommit(day.inputValue)}
            >
              {day.date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="dc-date-picker-footer">
        <button type="button" onClick={() => onCommit(todayValue)}>
          {texts.today}
        </button>
        <button type="button" onClick={onClose}>
          {texts.close}
        </button>
      </div>
    </div>
  );
};

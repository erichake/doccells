/* eslint-disable react/prop-types */
import {
  dateToInputValue,
  getMonthCells,
} from "./dateCellPickerUtils.js";
import "./DateCellPicker.css";

const DATE_PICKER_TEXTS = {
  en: {
    previousMonth: "Previous month",
    nextMonth: "Next month",
    today: "Today",
    close: "Close",
    title: "Choose date",
  },
  "fr-FR": {
    previousMonth: "Mois précédent",
    nextMonth: "Mois suivant",
    today: "Aujourd’hui",
    close: "Fermer",
    title: "Choisir une date",
  },
  "zh-CN": {
    previousMonth: "上个月",
    nextMonth: "下个月",
    today: "今天",
    close: "关闭",
    title: "选择日期",
  },
  "zh-TW": {
    previousMonth: "上個月",
    nextMonth: "下個月",
    today: "今天",
    close: "關閉",
    title: "選擇日期",
  },
  "es-ES": {
    previousMonth: "Mes anterior",
    nextMonth: "Mes siguiente",
    today: "Hoy",
    close: "Cerrar",
    title: "Elegir fecha",
  },
  hi: {
    previousMonth: "पिछला महीना",
    nextMonth: "अगला महीना",
    today: "आज",
    close: "बंद करें",
    title: "तिथि चुनें",
  },
  ru: {
    previousMonth: "Предыдущий месяц",
    nextMonth: "Следующий месяц",
    today: "Сегодня",
    close: "Закрыть",
    title: "Выбрать дату",
  },
  pt: {
    previousMonth: "Mês anterior",
    nextMonth: "Próximo mês",
    today: "Hoje",
    close: "Fechar",
    title: "Escolher data",
  },
  de: {
    previousMonth: "Vorheriger Monat",
    nextMonth: "Nächster Monat",
    today: "Heute",
    close: "Schließen",
    title: "Datum auswählen",
  },
  el: {
    previousMonth: "Προηγούμενος μήνας",
    nextMonth: "Επόμενος μήνας",
    today: "Σήμερα",
    close: "Κλείσιμο",
    title: "Επιλογή ημερομηνίας",
  },
  it: {
    previousMonth: "Mese precedente",
    nextMonth: "Mese successivo",
    today: "Oggi",
    close: "Chiudi",
    title: "Scegli data",
  },
  nl: {
    previousMonth: "Vorige maand",
    nextMonth: "Volgende maand",
    today: "Vandaag",
    close: "Sluiten",
    title: "Datum kiezen",
  },
};

const getDatePickerTexts = (locale) => {
  const localeId = String(locale || "en").toLowerCase();
  const languageId = localeId.split("-")[0];
  const exactKey = Object.keys(DATE_PICKER_TEXTS).find(
    (key) => key.toLowerCase() === localeId,
  );
  const languageKey = Object.keys(DATE_PICKER_TEXTS).find(
    (key) => key.toLowerCase().split("-")[0] === languageId,
  );
  return (
    DATE_PICKER_TEXTS[exactKey] ||
    DATE_PICKER_TEXTS[languageKey] ||
    DATE_PICKER_TEXTS.en
  );
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

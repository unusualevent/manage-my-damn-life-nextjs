
/*
* SYSTEM_DEFAULT_LABEL_PREFIX: Default prefix applied to all system generated labels like
* "My Day"
*/
export const SYSTEM_DEFAULT_LABEL_PREFIX="mmdl"
export const MYDAY_LABEL=SYSTEM_DEFAULT_LABEL_PREFIX+"-myday"

/**
 * Allowed date formats
 */

export const QUICK_ADD_FORMATS = [
    "MM/DD/YYYY",
    "M/D/YYYY",
    "M/D/YY",                           
    "MM/DD/YY",
    "DD/MM/YY",
    "D/M/YYYY",
    "DD/MM/YYYY",
    "D/M/YY",
    "YYYY-MM-DD",
    "YYYY/MM/DD",
];

export const QUICK_ADD_OUTPUT_FORMATS = [
    "MM/DD/YYYY HH:mm",
    "M/D/YYYY HH:mm",
    "M/D/YY HH:mm",                           
    "MM/DD/YY HH:mm",
    "DD/MM/YY HH:mm",
    "D/M/YYYY HH:mm",
    "DD/MM/YYYY HH:mm",
    "D/M/YY HH:mm",
    "YYYY-MM-DD HH:mm",
    "YYYY/MM/DD HH:mm",
];



/**
 * 
 * FullCalendar's config
 * See https://fullcalendar.io/docs/businessHours
 */

export const FULLCALENDAR_BUSINESS_HOURS={
    daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
    startTime: '7:00', 
    endTime: '23:00', 
}



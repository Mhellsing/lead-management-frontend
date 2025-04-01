export const formatDate = (dateString) => {
    const date = new Date(dateString);
        
    const monthDayFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
    const formattedMonthDay = monthDayFormatter.format(date);
        
    const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formattedTime = timeFormatter.format(date);
    
    return `${formattedMonthDay} @ ${formattedTime}`;
   };

export const formatInitialForName = (name) => {
    return name.substring(0, 1);
}
export function useGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 19) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Night!';
  }

  return [greeting];
}

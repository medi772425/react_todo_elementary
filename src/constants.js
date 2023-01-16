const statusYet = 1;
const statusStarted = 2;
const statusComplete = 3;

const statuses = [
  { value: statusYet, text: '未着手' },
  { value: statusStarted, text: '進行中' },
  { value: statusComplete, text: '完了' },
];

export { statusYet, statusStarted, statusComplete, statuses };

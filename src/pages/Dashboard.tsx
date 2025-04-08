import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', expenses: 400 },
  { month: 'Feb', expenses: 300 },
  { month: 'Mar', expenses: 600 },
  { month: 'Apr', expenses: 200 },
  { month: 'May', expenses: 500 },
  { month: 'Jun', expenses: 700 },
]

const transactions = [
  { date: '2025-04-01', description: 'Groceries', amount: -120 },
  { date: '2025-04-02', description: 'Salary', amount: 3000 },
  { date: '2025-04-03', description: 'Gym Membership', amount: -45 },
  { date: '2025-04-04', description: 'Electricity Bill', amount: -90 },
]

export default function Dashboard() {
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0)
  const balance = totalIncome + totalExpenses

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome back, Test User</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Income</h2>
          <p className="text-green-600 text-xl">${totalIncome}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <p className="text-red-600 text-xl">${Math.abs(totalExpenses)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className={`text-xl ${balance >= 0 ? 'text-green-700' : 'text-red-700'}`}>${balance}</p>
        </div>
      </div>

      {/* Expenses Chart */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Date</th>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{tx.date}</td>
                <td>{tx.description}</td>
                <td className={tx.amount < 0 ? 'text-red-600' : 'text-green-600'}>
                  ${Math.abs(tx.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

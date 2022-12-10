#include <bits/stdc++.h>
using namespace std;

int main()
{
  string s;
  freopen("1.txt", "r", stdin);
  int maxi = 0;
  int temp = 0;
  priority_queue<int> pq;
  while (getline(cin, s))
  {
    if (s.size() == 0)
    {
      pq.push(temp);
      temp = 0;
    }
    else
    {
      temp += stoi(s);
    }
  }
  pq.push(temp);
  int count = 3;
  int ans = 0;

  // cout << pq.top() << '\n'; part 1

  while (count--)
  {
    ans += pq.top();
    pq.pop();
  }

  cout << ans << endl; // part 2
}
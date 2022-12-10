#include <bits/stdc++.h>
using namespace std;

string a, b;
void solve() {
  int sum = 0;
  while (cin >> a >> b) {
    int enemy = a[0] - 'A' + 1;
    int target = b[0] - 'X' + 1;
    int picked = 0;
    if (target == 1) {
      if (enemy == 3) {
        picked = 2;
      } else if (enemy == 2) {
        picked = 1;
      } else
        picked = 3;
      sum += picked;
    } else if (target == 2) {
      sum += 3 + enemy;
    } else if (target == 3) {
      if (enemy == 3) {
        picked = 1;
      } else if (enemy == 2) {
        picked = 3;
      } else
        picked = 2;
      sum += 6 + picked;
    }
  }
  cout << sum << endl;
}

int main() {
  freopen("2.txt", "r", stdin);
  solve();
}
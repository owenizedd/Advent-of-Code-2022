#include <bits/stdc++.h>
using namespace std;

string a, b;
string c;

int findPrio(vector<string> strs) {
  for (int i = 0; i < strs[0].size(); i++) {
    for (int j = 0; j < strs[1].size(); j++) {
      for (int k = 0; k < strs[2].size(); k++) {
        if (strs[0][i] == strs[1][j] && strs[1][j] == strs[2][k]) {
          char c = strs[0][i];
          cout << c << endl;
          if (c >= 'a' && c <= 'z') {
            return c - 'a' + 1;
          }
          if (c >= 'A' && c <= 'Z') {
            return c - 'A' + 27;
          }
        }
      }
    }
  }
  return 0;
}
void solve() {
  int sum = 0;
  int c = 0;
  vector<string> arr;
  while (cin >> a) {
    arr.push_back(a);
    c++;
    if (c == 3) {
      c = 0;
      cout << arr.size() << " | ";
      cout << findPrio(arr) << endl;
      sum += findPrio(arr);
      arr.clear();
    }
  }

  cout << sum << endl;
}

void solve2() {
  while (cin >> c) {
  }
}

int main() {
  freopen("3.txt", "r", stdin);
  solve();
}
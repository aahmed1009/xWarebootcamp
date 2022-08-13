#include <iostream>

using namespace std;

string convert (string str){
    bool flag = 0;
    for (int i = 0;i<str.size();i++){
        if (str[i] =='_'){
            int idx = i;
            for (int j = idx;j<str.size();j++){
                if (!flag){
                str[j] = toupper(str[j + 1]);
                flag = 1;
                }
                else
                str[j] = str[j + 1];
            }
        }
    }
    return str;
}
int main()
{
    cout << convert("Hello_world");

    return 0;
}
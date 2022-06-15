def bal_check (str):
    import re

    ans = ""
    rx = "([a-zA-Z0-9.]+)"

    str_arr = re.findall(rx,str)

    while "" in str_arr:
        str_arr.remove("")

    ans += f"Original Balance: {format(float(str_arr[0]), '.2f')}\r\n"
    remaining_bal = float(str_arr[0])
    expenses = 0
    count = 0

    for i in range(1, len(str_arr), 3):
        bal = round(remaining_bal - float(str_arr[i + 2]), 2)
        ans += f'{str_arr[i]} {str_arr[i + 1]} {format(float(str_arr[i + 2]), ".2f")} Balance {format(bal, ".2f")}\r\n'
        remaining_bal -= round(float(str_arr[i + 2]), 2)
        expenses += float(str_arr[i + 2])
        count += 1
    
    ans += f"Total expense  {format(expenses, '.2f')}\r\n"
    ans += f"Average expense  {format(expenses / count, '.2f')}"
    
    print(ans)
    return ans

val = """1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
"""

bal_check(val)
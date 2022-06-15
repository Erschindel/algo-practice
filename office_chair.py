def chairs(arr, int):
    ans = []
    total = 0

    for i in arr:
        if total == int:
            break
        elif len(i[0]) >= i[1]:
            ans.append(0)
            continue
        elif total + i[1] - len(i[0]) > int:
            ans.append(int - total)
            total += int - total
        else:
            ans.append(i[1] - len(i[0]))
            total += i[1] - len(i[0])

    print("Game On" if int == 0 else ans if total == int else "Not enough!")

    return "Game On" if int == 0 else ans if total == int else "Not enough!"

arr = [["XX", 2], ["XXXX", 6], ["XXXXX", 4]]
val = 2
chairs(arr, val)
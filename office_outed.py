def outed(meet, boss):
    total_vals = [meet[i] * 2 if i == boss else meet[i] for i in meet.keys()]
    avg_val = sum(total_vals)/len(total_vals)
    # print(avg_val)
    # print('Get Out Now!' if avg_val <= 5 else 'Nice Work Champ!')
    return 'Get Out Now!' if avg_val <= 5 else 'Nice Work Champ!'


val = {"boss":2,"mark":7,"luke":9,"alan":1}
outed(val, "boss")
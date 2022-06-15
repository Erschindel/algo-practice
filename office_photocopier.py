from xml.etree.ElementTree import tostring


def copier(str):
    list_str = "".join("0" if str[i] == "1" else "1" for i in range(len(str)))
    print(list_str)
    return

val = '0101010100001'
copier(val)
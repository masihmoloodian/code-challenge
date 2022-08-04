# https://www.hackerrank.com/challenges/sock-merchant/problem

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

res = 0
for i in set(ar):
    res += ar.count(i) / 2
    
print(res)
l=list(map(str,input().split()))
c,ka,oth=0,0,0
for i in l[0]:
    if i=='-':
        c+=1
if c==2:
    l.append(l[0])
    print(l)
else:
    for i in l:
            if i[:2].lower()=='ka':
                ka+=1
                l[0]=ka
    print(l)
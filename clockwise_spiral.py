def spiral(n):
    
    # check input
    if n == 0 or type(n) != int:
        print([[]])
        return [[]]

    ans = [[0] * n for _ in range(n)]
    current = 0
    loops = 0

    # right/begin
    ans[loops] = [i + 1 for i in range(current,n)]
    loops += 1
    current += n
    if current == n**2:
        return ans

    if(n % 2 == 0):
        # down
        for i in ans:
            if i[n - loops] == 0:
                current += 1
                i[n - loops] = current

        # left    
        for i in reversed(range(0,n)):
            if ans[n - loops][i] == 0:
                current += 1
                ans[n - loops][i] = current

        if current == n**2:
            print(ans)
            return ans

        while(True):
            # up
            for i in reversed(ans):
                if i[loops - 1] == 0:
                    current += 1
                    i[loops - 1] = current

            # right
            for i, val in enumerate(ans[loops]): 
                if val == 0:
                    current += 1
                    ans[loops][i] = current
            loops += 1
            
            # down
            for i in ans:
                if i[n - loops] == 0:
                    current += 1
                    i[n - loops] = current

            # left    
            for i in reversed(range(0,n)):
                if ans[n - loops][i] == 0:
                    current += 1
                    ans[n - loops][i] = current

            if current == n**2:
                print(ans)
                return ans

    else:
        while(True):
            # down
            for i in ans:
                if i[n - loops] == 0:
                    current += 1
                    i[n - loops] = current

            # left 
            for i in reversed(range(0,n)):
                if ans[n - loops][i] == 0:
                    current += 1
                    ans[n - loops][i] = current 

            # up
            for i in reversed(ans):
                if i[loops - 1] == 0:
                    current += 1
                    i[loops - 1] = current

            # right    
            for i, val in enumerate(ans[loops]): 
                if val == 0:
                    current += 1
                    ans[loops][i] = current

            if current == n**2:
                print(ans)
                return ans
            loops += 1

val = 10
spiral(val)
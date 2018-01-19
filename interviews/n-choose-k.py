# n choose k
# 3 choose 2
#    AB, BC, AC = 3 combinations
# n choose k = (n-1 choose k-1) + (n-1 choose k)
# 5 choose 4 = (4 choose 3) + (4 choose 4)
#            = (3 choose 2) + (3 choose 3) + (4 choose 4)
#            = (2 choose 1) + 1 + 1 + 1 = 5
# 5 choose 3 = ( 4 choose 2) + (4 choose 3)
             # = [(3 choose 1) + (3 choose 2)] + [(3 choose 2) + (3 choose 3)]
            # = [(3) + (2 choose 1) + (2 choose 2)] + [(2 choose 1) + (2 choose 2)] + 1
        #    = 3 + (2) + (1) + (2) + (1) + 1
    #          = 3 + 3 + 4 = 10 = ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE

# k = 1, n choose k = n
# n = k, n choose k = 1
# 2 choose 1 = 2
## n - 1 = k, n choose k = n

# answers[5, 3] = 10
# answers[3, 1] = 3
# answers[3, 2] = 3

# n choose k = (n-k+1)(n-k) + (n-k)

def choose(n, k):
    if n == k:
        return 1
    elif k == 1:
        return n
    else:
        return choose(n-1, k-1) + choose(n-1, k)

print(choose(5, 2))

def fast_choose(n, k):
    answer = {}
    if n == k:
        return 1
    elif k == 1:
        return n
    elif [n, k] in answer:
        return answer{[n, k]}
    else:
        answer{[n, k]} = choose(n-1, k-1) + choose(n-1, k)
        return answer{[n, k]}
    
print(choose(5, 2))
        
# 1 <= k <= n

# time
# O(n, k) = O(k-1) + O(n-k)
# worst case O(n, k) = n

# space
# O(n, k) = 2 = O(1)

# n-k = 4
# k = 100

# n-k = 100
# k = 1

    
# O(n, k) = O(n-1, k-1) + O(n-1, k)

# worst case O(n-1, k-1) = O(n);
# worst case O(n-1, k) = O(n-k) = O(n);
# O(n, k) = 2*O(n)
from sum import sum_self_made
def test_sum():
    # assert sum([1, 2, 3]) == 6, "Should be 6"

    result = sum_self_made([2,9,3])
    assert result == 14, "Should be 14"
    

def test_sum_tuple():
    '''to count sum of inputted'''

    
if __name__ == "__main__":
    test_sum()
    print("Everything passed")
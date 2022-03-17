func checkIfExist(arr []int) bool {
    if len(arr) == 0 || arr == nil {
        return false
    }
    
    hash := make(map[int]bool)
    
    for _ , value := range arr {
        if hash[value * 2] == true || value % 2 == 0 && hash[value / 2] == true {
            return true
        } 
        
        hash[value] = true
    }
    
    return false
}
duplicate = () => {
      let nums = [3,5,6,6]
      for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) {
                  return true
            }
      }
      return false ;
}

duplicate()

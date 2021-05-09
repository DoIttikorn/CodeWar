package IPValidation

import (
	"fmt"
	"strings"
)

func Is_valid_ip(ip string) bool {
	res1 := strings.Split(ip, ":")
	fmt.Print(res1)
	return true
}

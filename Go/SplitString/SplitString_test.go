package SplitString_test

import (
	. "github.com/DoIttikorn/CodeWar/tree/main/Go/SplitString"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Split Strings", func() {
	It("Basic tests", func() {
		Expect(Solution("abc")).To(Equal([]string{"ab", "c_"}))
		Expect(Solution("dawsd")).To(Equal([]string{"da", "ws", "d_"}))
		Expect(Solution("awsaws")).To(Equal([]string{"aw", "sa", "ws"}))
	})
})

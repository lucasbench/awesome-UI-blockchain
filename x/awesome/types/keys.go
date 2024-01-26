package types

const (
	// ModuleName defines the module name
	ModuleName = "awesome"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_awesome"
)

var (
	ParamsKey = []byte("p_awesome")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

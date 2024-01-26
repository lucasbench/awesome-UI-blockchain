package awesome_test

import (
	"testing"

	keepertest "awesome/testutil/keeper"
	"awesome/testutil/nullify"
	"awesome/x/awesome/module"
	"awesome/x/awesome/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.AwesomeKeeper(t)
	awesome.InitGenesis(ctx, k, genesisState)
	got := awesome.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}

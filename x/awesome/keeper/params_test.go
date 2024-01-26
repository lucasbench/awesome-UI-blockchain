package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "awesome/testutil/keeper"
	"awesome/x/awesome/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.AwesomeKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}

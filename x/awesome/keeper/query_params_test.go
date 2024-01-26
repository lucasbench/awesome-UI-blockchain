package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "awesome/testutil/keeper"
	"awesome/x/awesome/types"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := keepertest.AwesomeKeeper(t)
	params := types.DefaultParams()
	require.NoError(t, keeper.SetParams(ctx, params))

	response, err := keeper.Params(ctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}

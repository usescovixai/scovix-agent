use anchor_lang::prelude::*;

declare_id!("SCOVIX111111111111111111111111111111111");

#[program]
pub mod rewards {
    use super::*;

    pub fn claim_rewards(
        _ctx: Context<ClaimRewards>,
        amount: u64,
    ) -> Result<()> {
        msg!("Claimed {} SOL", amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ClaimRewards<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}

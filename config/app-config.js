const config = {
  production: {
    password_hash_size: 10,
    user_token_size: 16,
    user_home_path: '/game_files'
  },
  development: {
    password_hash_size: 10,
    user_token_size: 16,
    user_home_path: './temp_data'
  }
};

module.exports = config[process.env.NODE_ENV];

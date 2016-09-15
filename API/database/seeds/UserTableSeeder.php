<?php

use Illuminate\Database\Seeder;
use cmpn\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$users = [
    	[
    	'name'=>'kid',
    	'email'=>'kid@kid.com',
    	'password'=>Hash::make(12345)
    	]
    	];   
    	foreach ($users as $user) {
    		User::create($user);
    	}
    }
}

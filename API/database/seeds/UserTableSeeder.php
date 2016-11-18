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
     'name'=>'admin',
     'email'=>'kid@kid.com',
     'avatar'=>'avatar.png',
     'type'=>'admin',
     'subNivel'=>'',

     'password'=>Hash::make(123456789)
     ],
     [
     'name'=>'funcionario',
     'email'=>'kid2@kid.com',
     'avatar'=>'avatar.png',
     'type'=>'funcionario',
     'subNivel'=>'social',

     'password'=>Hash::make(123456789)
     ],
     [
     'name'=>'cidadao',
     'email'=>'kid3@kid.com',
     'avatar'=>'avatar.png',
     'type'=>'',
     'subNivel'=>'',

     'password'=>Hash::make(123456789)
     ]
     ];
     foreach ($users as $user) {
      User::create($user);
    }
  }
}

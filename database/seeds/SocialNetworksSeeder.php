<?php

use Illuminate\Database\Seeder;

class SocialNetworksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $types = [
            ['id' => 1, 'name' => 'Website', 'url' => NULL, 'usernameFirst' => NULL, startWith => NULL],
            ['id' => 2, 'name' => 'Instagram', 'url' => 'instagram.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 3, 'name' => 'Facebook', 'url' => 'facebook.com/', 'usernameFirst' => NULL, startWith => '/'],
            ['id' => 4, 'name' => 'Twitter', 'url' => 'twitter.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 5, 'name' => 'Tumblr', 'url' => '.tumblr.com', 'usernameFirst' => 1, startWith => '@'],
            ['id' => 6, 'name' => 'Snapchat', 'url' => 'snapchat.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 7, 'name' => 'LinkedIn', 'url' => 'linkedin.com/in/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 8, 'name' => 'Flickr', 'url' => 'flickr.com/photos/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 9, 'name' => 'Reddit', 'url' => 'reddit.com/u/', 'usernameFirst' => NULL, startWith => '/u/'],
            ['id' => 10, 'name' => 'Letterboxd', 'url' => 'letterboxd.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 11, 'name' => 'GitHub', 'url' => 'github.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 12, 'name' => 'Behance', 'url' => 'behance.net/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 13, 'name' => 'Pinterest', 'url' => 'pinterest.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 14, 'name' => '500px', 'url' => '500px.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 15, 'name' => 'OkCupid', 'url' => 'okcupid.com/profile/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 16, 'name' => 'YouTube', 'url' => 'youtube.com/channel/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 17, 'name' => 'Vimeo', 'url' => 'vimeo.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 18, 'name' => 'Telegram', 'url' => 't.me/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 19, 'name' => 'MercadoLibre', 'url' => 'mercadolibre.com.ar/perfil/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 20, 'name' => 'Discogs', 'url' => 'discogs.com/user/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 21, 'name' => 'TikTok', 'url' => 'tiktok.com/@', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 22, 'name' => 'TV Time', 'url' => 'tvtime.com/', 'usernameFirst' => NULL, startWith => '@'],
            ['id' => 999, 'name' => 'Custom', 'url' => NULL, 'usernameFirst' => NULL, startWith => NULL],
        ];

        DB::table('social_networks')->insert($types);

    }
}

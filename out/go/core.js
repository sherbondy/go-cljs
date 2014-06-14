// Compiled by ClojureScript 0.0-2234
goog.provide('go.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
go.core.board_size_choices = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,11,13,19], null);
go.core.board_size = 11;
go.core.square = (function square(n){return (n * n);
});
go.core.board = cljs.core.vec.call(null,cljs.core.repeat.call(null,go.core.square.call(null,go.core.board_size),new cljs.core.Keyword(null,"empty","empty",1110538431)));
go.core.board_text = (function board_text(board){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",(function (){var iter__4263__auto__ = (function iter__6191(s__6192){return (new cljs.core.LazySeq(null,(function (){var s__6192__$1 = s__6192;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6192__$1);if(temp__4126__auto__)
{var s__6192__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6192__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__6192__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__6194 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__6193 = 0;while(true){
if((i__6193 < size__4262__auto__))
{var row = cljs.core._nth.call(null,c__4261__auto__,i__6193);cljs.core.chunk_append.call(null,b__6194,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})());
{
var G__6195 = (i__6193 + 1);
i__6193 = G__6195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6194),iter__6191.call(null,cljs.core.chunk_rest.call(null,s__6192__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6194),null);
}
} else
{var row = cljs.core.first.call(null,s__6192__$2);return cljs.core.cons.call(null,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})(),iter__6191.call(null,cljs.core.rest.call(null,s__6192__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,cljs.core.range.call(null,go.core.board_size));
})()));
});
go.core.turn_text = (function turn_text(turn){return ("Turn: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__6197 = cljs.core.mod.call(null,turn,2);switch (G__6197) {
case 0:
return "Black";

break;
case 1:
return "White";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,turn,2)))));

}
})()));
});
go.core.Stringable = (function (){var obj6200 = {};return obj6200;
})();
go.core.as_str = (function as_str(this$){if((function (){var and__3526__auto__ = this$;if(and__3526__auto__)
{return this$.go$core$Stringable$as_str$arity$1;
} else
{return and__3526__auto__;
}
})())
{return this$.go$core$Stringable$as_str$arity$1(this$);
} else
{var x__4165__auto__ = (((this$ == null))?null:this$);return (function (){var or__3538__auto__ = (go.core.as_str[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (go.core.as_str["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Stringable.as-str",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
go.core.GameState = (function (board,turn){
this.board = board;
this.turn = turn;
})
go.core.GameState.cljs$lang$type = true;
go.core.GameState.cljs$lang$ctorStr = "go.core/GameState";
go.core.GameState.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"go.core/GameState");
});
go.core.GameState.prototype.go$core$Stringable$ = true;
go.core.GameState.prototype.go$core$Stringable$as_str$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(go.core.turn_text.call(null,self__.turn))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(go.core.board_text.call(null,self__.board)));
});
go.core.__GT_GameState = (function __GT_GameState(board,turn){return (new go.core.GameState(board,turn));
});
go.core.game = (new go.core.GameState(go.core.board,0));
go.core.place_stone = (function place_stone(board,stone,x,y){return cljs.core.assoc.call(null,board,(x * y),stone);
});
go.core.board_elem = document.getElementById("board");
go.core.board_elem.innerHTML = go.core.as_str.call(null,go.core.game);
go.core.handle_move = (function handle_move(e){if(cljs.core._EQ_.call(null,e.keyCode,32))
{return alert("hello");
} else
{return null;
}
});
go.core.move_input = document.getElementById("move");
go.core.move_input.addEventListener("keyup",go.core.handle_move);
go.core.move_input.removeEventListener("keyup");

//# sourceMappingURL=core.js.map